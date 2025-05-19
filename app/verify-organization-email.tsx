// app/verify-organization-email.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function VerifyOrganizationEmailScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
    const handleSendOtp = () => {
    console.log('Sending OTP to:', otp);

  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar backgroundColor="#3b68e7" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#333" />
          <Text style={styles.backText}>Verify Organization Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim
          </Text>
        </View>

        <View style={styles.descriptionContainer}>

        </View>

        <View style={styles.sendoptBg}>
          <TextInput
            style={styles.otpBg}
            placeholder="Enter organisation mail id"
            placeholderTextColor="#B0B0B0"
            value={otp}
            onChangeText={setOtp}
            keyboardType="default"
          />

          <View style={styles.otpLine}></View>
          <TouchableOpacity
            style={styles.sendOtpButton}
            activeOpacity={0.8}
            onPress={handleSendOtp}
          >
            <Text style={styles.sendOtpText}>Send OTP</Text>
          </TouchableOpacity>

          <Text style={styles.otpInfoText}>Don't have a mail id? <Text style={styles.otpInfoTextblue}>Use below options</Text></Text>


        </View>


        <View style={styles.linkedinContainer}>
          <TouchableOpacity style={styles.linkedinButton}>
            <FontAwesome name="linkedin-square" size={24} color="#fff" />
            <Text style={styles.linkedinText}>Connect with LinkedIn</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.organizationIdContainer}>

          <TouchableOpacity style={styles.organizationIdButton}>
            <FontAwesome5 name="id-card" size={20} color="#333" />
            <Text style={styles.organizationIdText}>Verify by organization ID card</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />

          </TouchableOpacity>

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
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 8,
    color: '#3459bf',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sendOtpButton: {
    backgroundColor: '#3b68e7',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  sendOtpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  otpInfoText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 30,
  },

  otpInfoTextblue: {
    color: '#3b68e7',
  },
  linkedinContainer: {
    marginTop: 30,
    marginBottom: 16,
  },
  linkedinButton: {
    backgroundColor: '#0077b5',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkedinText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginLeft: 10,
  },
  organizationIdContainer: {
    marginTop: 10,
  },
  organizationIdButton: {
    backgroundColor: '#E0E4FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationIdText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
    marginLeft: 10,
  },
  otpBg: {
    backgroundColor: '#fff',
    marginBottom: -10,
    borderRadius: 8,
  },

  sendoptBg: {
    backgroundColor: '#fff',
    paddingTop: 30,
    borderRadius: 8,
    padding: 20,

  },

  otpLine: {
    marginBottom: 25,
    borderRadius: 8,
    height: 2,
    backgroundColor: '#C2CDFF',
    marginVertical: 10,
  },



});