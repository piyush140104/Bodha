import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBF7F2",
  },
  scrollContent: {
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F1E2D1",
    alignItems: "center",
    justifyContent: "center",
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3A2B20",
  },
  brandSubtitle: {
    fontSize: 14,
    color: "#7A6A5E",
  },

  notification: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EFEAE4",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#C77833",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  goalsCard: {
    marginHorizontal: 20,
    borderRadius: 26,
    padding: 20,
  },
  goalsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  targetIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  goalsSubtitle: {
    fontSize: 14,
    color: "#FFEAD1",
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 6,
    marginVertical: 16,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
  },

  goalItemActive: {
    flexDirection: "row",
    gap: 10,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
  },
  goalItem: {
    flexDirection: "row",
    gap: 10,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 10,
  },
  goalText: {
    color: "#fff",
    fontSize: 15,
  },

  sectionHeader: {
    marginTop: 28,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3A2B20",
  },
  viewAll: {
    fontSize: 16,
    color: "#C77833",
  },

  studyCardOrange: {
    backgroundColor: "#F9EFE6",
    margin: 20,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  studyIconOrange: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#F1E2D1",
    alignItems: "center",
    justifyContent: "center",
  },
  studyCardBlue: {
    backgroundColor: "#EDF3FB",
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  studyIconBlue: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#DCE7F5",
    alignItems: "center",
    justifyContent: "center",
  },

  studyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2E2A27",
  },
  studySubtitle: {
    fontSize: 14,
    color: "#7A6A5E",
    marginVertical: 4,
  },

  topicPillOrange: {
    backgroundColor: "#F1E2D1",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  topicTextOrange: {
    color: "#C77833",
    fontWeight: "600",
  },
  topicPillBlue: {
    backgroundColor: "#DCE7F5",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  topicTextBlue: {
    color: "#4A78C2",
    fontWeight: "600",
  },

  arrowCircleOrange: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1E2D1",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowCircleBlue: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#DCE7F5",
    alignItems: "center",
    justifyContent: "center",
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 22,
    padding: 20,
  },
  progressTitle: {
    color: "#7A6A5E",
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 20,
  },
  progressStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    alignItems: "center",
  },
  statValueRed: {
    fontSize: 28,
    fontWeight: "800",
    color: "#C2412D"
  },
  statValueBlue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4A78C2",
  },
  statLabel: {
    color: "#7A6A5E",
    marginTop: 4,
  },
});

export default styles;
