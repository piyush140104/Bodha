import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../constants/HomeScreen.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.brandIcon}>
              <Ionicons name="book-outline" size={20} color="#C77833" />
            </View>
            <View>
              <Text style={styles.brandTitle}>Bodha</Text>
              <Text style={styles.brandSubtitle}>
                Your study companion
              </Text>
            </View>
          </View>

          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={22} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </View>

        <LinearGradient
          colors={["#C77435", "#9C5824"]}
          style={styles.goalsCard}
        >
          <View style={styles.goalsHeader}>
            <View style={styles.targetIcon}>
              <Ionicons name="radio-button-on" size={20} color="#fff" />
            </View>
            <View>
              <Text style={styles.goalsTitle}>
                Daily Study Goals
              </Text>
              <Text style={styles.goalsSubtitle}>
                1 of 3 completed
              </Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.goalItemActive}>
            <Ionicons
              name="checkmark-circle"
              size={22}
              color="#fff"
            />
            <Text style={styles.goalText}>
              Complete 2 History chapters
            </Text>
          </View>

          <View style={styles.goalItem}>
            <Ionicons
              name="ellipse-outline"
              size={22}
              color="#fff"
            />
            <Text style={styles.goalText}>
              Review Polity notes
            </Text>
          </View>

          <View style={styles.goalItem}>
            <Ionicons
              name="ellipse-outline"
              size={22}
              color="#fff"
            />
            <Text style={styles.goalText}>
              Practice 20 MCQs
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Continue Studying
          </Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <View style={styles.studyCardOrange}>
          <View style={styles.studyIconOrange}>
            <Ionicons name="newspaper-outline" size={22} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.studyTitle}>
              GS 1: History & Culture
            </Text>
            <Text style={styles.studySubtitle}>
              Ancient, Medieval & Modern India
            </Text>
            <View style={styles.topicPillOrange}>
              <Text style={styles.topicTextOrange}>
                24 Topics
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.arrowCircleOrange}>
            <Ionicons name="chevron-forward" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.studyCardBlue}>
          <View style={styles.studyIconBlue}>
            <Ionicons name="business-outline" size={22} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.studyTitle}>
              GS 2: Polity & Governance
            </Text>
            <Text style={styles.studySubtitle}>
              Constitution, Polity & Social Justice
            </Text>
            <View style={styles.topicPillBlue}>
              <Text style={styles.topicTextBlue}>
                18 Topics
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.arrowCircleBlue}>
            <Ionicons name="chevron-forward" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>
            THIS WEEK'S PROGRESS
          </Text>

          <View style={styles.progressStats}>
            <View style={styles.stat}>
              <Text style={styles.statValueRed}>12</Text>
              <Text style={styles.statLabel}>Chapters</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValueRed}>156</Text>
              <Text style={styles.statLabel}>MCQs Done</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValueBlue}>8.5</Text>
              <Text style={styles.statLabel}>Hours</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
