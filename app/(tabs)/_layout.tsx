import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = ()=> {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={focused ? "#5B4EFF" : "#9CA3AF"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused
                  ? "chatbubble-ellipses"
                  : "chatbubble-ellipses-outline"
              }
              size={26}
              color={focused ? "#5B4EFF" : "#9CA3AF"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={26}
              color={focused ? "#F59E0B" : "#9CA3AF"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
