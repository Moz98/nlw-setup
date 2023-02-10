import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Alert } from "react-native";
import { day_size, HabitDay } from "../components/HabitDay";
import { HabitDayHeader } from "../components/HabitDayHeader";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { generateRangeBetweenDates } from "../utils/generate-range-between-dates";
import { api } from "../lib/axios";

const datesFromYearStart = generateRangeBetweenDates();
const minimunSummaryDatesSize = 18 * 6;
const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length;

export const Home = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);

  async function fectchData() {
    try {
      setLoading(true);
      const response = await api.get("/summary");
      setSummary(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível carregar o sumário de hábitos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fectchData();
  }, []);

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <HabitDayHeader />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay
              key={date.toISOString()}
              onPress={() => navigate("habit", { date: date.toISOString() })}
            />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View
                key={i}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40 "
                style={{ width: day_size, height: day_size }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
