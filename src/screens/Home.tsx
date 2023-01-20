import { View } from "react-native";
import { HabitDay } from "../components/HabitDay";
import { HabitDayHeader } from "../components/HabitDayHeader";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <HabitDayHeader />
      <HabitDay />
    </View>
  );
};
