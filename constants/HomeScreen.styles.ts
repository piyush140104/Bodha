import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,     
    paddingBottom: 6, 
    marginTop: 10,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EEF0F8",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2E2A64",
  },

  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E9EDF7",  
    borderWidth: 3,
    borderColor: "#DDE3F2",
  },
  

  heroCard: {
    marginTop: 25,
    borderRadius: 32,
    height: 180,
    paddingHorizontal: 26,
    paddingBottom: 14,
  },

  heroContentWrapper: {
    flex: 1,
    justifyContent: "center",
  },

  heroContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  heroIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },

  heroTextWrap: {
    marginLeft: 18,
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  heroSubtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 6,
  },

  dots: {
    flexDirection: "row",
    alignSelf: "center",
  },

  dotActive: {
    width: 18,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    marginRight: 6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginRight: 6,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 34,
  },

  sectionSubtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 22,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  gsCard: {
    width: "48%",
    height: 240,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    padding: 20,
    overflow:"hidden"
  },

  gsPurple: {
    borderWidth: 2,
    borderColor: "#9B87F5",
  },

  gsBlue: {
    borderWidth: 2,
    borderColor: "#3B82F6",
  },

  topDotPurple: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#9B87F5",
  },

  topDotBlue: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3B82F6",
  },

  gsIconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#F1F3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  gsTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 18,
  },

  gsSub: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
  },

  gsBottom: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  
  gsBadgePurple: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EDFF",
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 14,
  },

  gsBadgeBlue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F0FF",
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 14,
  },

  gsBadgeTextPurple: {
    color: "#7C6AED",
    fontWeight: "600",
    fontSize: 13,
  },

  gsBadgeTextBlue: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 13,
  },

  gsArrowPurple: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#7C6AED",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    transform: [{ translateX: -7 }],
  },

  gsArrowBlue: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    transform: [{ translateX: -7 }],
  },

  heroEmoji: {
    fontSize: 28,        
    lineHeight: 32,    
    textAlign: "center",
  },  
});
