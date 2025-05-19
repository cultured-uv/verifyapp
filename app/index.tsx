import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function VerifyProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right' ]}>
      <StatusBar backgroundColor="#3b68e7" />
 
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Verify Profile</Text>

          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <Link href="/verify-organization-email" asChild>
            <TouchableOpacity style={styles.optionCard}>
               <LinearGradient
      colors={['#e8eefb', '#c0d3ef']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.optionCard}
    >
              <View style={styles.optionIconContainer}>
                <Ionicons name="business" size={24} color="#3b68e7" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Verify you are a part of an organization</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
              </LinearGradient>
            </TouchableOpacity>
          </Link>
          
          <TouchableOpacity style={styles.optionCard}>
            <LinearGradient
      colors={['#e8eefb', '#c0d3ef']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.optionCard}
    >
            <View style={styles.optionIconContainer}>
              <Ionicons name="thumbs-up" size={24} color="#3b68e7" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Get endorsed by others</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
            </LinearGradient>
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.optionCard}>
                   <LinearGradient
      colors={['#e8eefb', '#c0d3ef']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.optionCard}
    >
            <View style={styles.optionIconContainer}>
              <Ionicons name="newspaper-outline" size={24} color="#3b68e7" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Verify your personal identity</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.verificationSymbolsContainer}>
          <Text style={styles.verificationSymbolsTitle}>Verification Symbols</Text>

          <View style={styles.symbolRow}>
            <View style={styles.symbolIcon}>
              <FontAwesome5 name="building" size={16} color="#3b68e7" />
            </View>
            <Text style={styles.symbolText}>Organization verified</Text>
          </View>

          <View style={styles.symbolRow}>
            <View style={styles.symbolIcon}>
              <FontAwesome5 name="landmark" size={16} color="#3b68e7" />
            </View>
            <Text style={styles.symbolText}>Government ID verified</Text>
          </View>

          <View style={styles.symbolRow}>
            <View style={styles.symbolIcon}>
              <FontAwesome5 name="shield-alt" size={16} color="#3b68e7" />
            </View>
            <Text style={styles.symbolText}>Organization + Government ID verified</Text>
          </View>

          <View style={styles.symbolRow}>
            <View style={styles.symbolIcon}>
              <FontAwesome5 name="user-friends" size={16} color="#3b68e7" />
            </View>
            <Text style={styles.symbolText}>Endorsed by Riders</Text>
          </View>
        </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FA',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#3459bf',
    paddingLeft: 36,
    paddingBottom: 13,
    paddingTop: 13,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  optionsContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
    marginBottom: 0,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d5e0fc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  verificationSymbolsContainer: {
    padding: 16,
    marginTop: 8,
  },
  verificationSymbolsTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
  },
  symbolRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  symbolIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  symbolText: {
    fontSize: 14,
    color: '#666',
  },
});