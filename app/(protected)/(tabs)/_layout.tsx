import { Icon } from "@/src/ui/components/icon";
import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  const { colors } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray2,
        tabBarStyle: {
          height: 90,
          paddingTop: 12,
          backgroundColor: colors.background,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: colors.text,
          fontSize: 12,
          fontFamily: "PoppinsRegular",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "Home-fill" : "Home-outline"}
                color={focused ? "primary" : "gray2"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name={"Explore"} color={focused ? "primary" : "gray2"} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "Person-fill" : "Person-outline"}
                color={focused ? "primary" : "gray2"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
