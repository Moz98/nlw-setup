import { useNavigation } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { day_size, HabitDay } from "../components/HabitDay";
import { HabitDayHeader } from "../components/HabitDayHeader";
import { Header } from "../components/Header";
import { generateRangeBetweenDates } from "../utils/generate-range-between-dates";

const datesFromYearStart = generateRangeBetweenDates();
const minimunSummaryDatesSize = 18 * 6;
const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length;

export const Home = () => {
  const { navigate } = useNavigation();

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
