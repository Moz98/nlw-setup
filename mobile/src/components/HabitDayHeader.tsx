import { View, Text } from "react-native";
import { day_size } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const HabitDayHeader = () => {
  return (
    <View className="flex-row mt-6 mb-2">
      {weekDays.map((day, i) => (
        <Text
          key={`${day}-${i}`}
          style={{ width: day_size, height: day_size }}
          className="text-zinc-400 text-xl font-bold text-center mx-1"
        >
          {day}
        </Text>
      ))}
    </View>
  );
};
