import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/HomeScreen.styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={22} />
        </TouchableOpacity>

        <Text style={styles.logo}>Bodha</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={["#1E1B4B", "#5B4EFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroCard}
      >
        <View style={styles.heroContentWrapper}>
          <View style={styles.heroContent}>
            <View style={styles.heroIcon}>
              <Text style={styles.heroEmoji}>📚</Text>
            </View>

            <View style={styles.heroTextWrap}>
              <Text style={styles.heroTitle}>Daily Study Goals</Text>
              <Text style={styles.heroSubtitle}>
                Stay consistent, achieve greatness
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.dots}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>General Studies</Text>
      <Text style={styles.sectionSubtitle}>Master the fundamentals</Text>

      <View style={styles.cardRow}>
        <View style={[styles.gsCard, styles.gsPurple]}>
          <View style={styles.topDotPurple} />

          <View style={styles.gsIconBox}>
            <Ionicons name="book-outline" size={26} color="#7C6AED" />
          </View>

          <Text style={styles.gsTitle}>GS 1</Text>
          <Text style={styles.gsSub}>History & Culture</Text>

          <View style={styles.gsBottom}>
            <View style={styles.gsBadgePurple}>
              <Ionicons name="document-text" size={14} color="#7C6AED" />
              <Text style={styles.gsBadgeTextPurple}> 14 Topics</Text>
            </View>

            <TouchableOpacity style={styles.gsArrowPurple}>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.gsCard, styles.gsBlue]}>
          <View style={styles.topDotBlue} />

          <View style={styles.gsIconBox}>
            <Ionicons name="git-network-outline" size={26} color="#2563EB" />
          </View>

          <Text style={styles.gsTitle}>GS 2</Text>
          <Text style={styles.gsSub}>Polity & Governance</Text>

          <View style={styles.gsBottom}>
            <View style={styles.gsBadgeBlue}>
              <Ionicons name="document-text" size={14} color="#2563EB" />
              <Text style={styles.gsBadgeTextBlue}> 21 Topics</Text>
            </View>

            <TouchableOpacity style={styles.gsArrowBlue}>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
