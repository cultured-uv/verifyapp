import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    Switch,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RideshareApp = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [poolEnabled, setPoolEnabled] = useState(true);
    const [selectedTab, setSelectedTab] = useState('Home');

    const savedLocations = [
        {
            id: 1,
            address: 'Desh Bandhu Gupta Road, 1100, Delhi Sadar Bazar,',
            isFavorite: true,
            type: 'recent'
        },
        {
            id: 2,
            address: 'Desh Bandhu Gupta Road, 1100, Delhi Sadar Bazar,',
            isFavorite: true,
            type: 'recent'
        },
        {
            id: 3,
            address: 'Desh Bandhu Gupta Road, 1100, Delhi Sadar Bazar,',
            isFavorite: false,
            type: 'recent'
        },
    ];

    const tabButtons = [
        { id: 'Home', label: 'Home', icon: '🏠' },
        { id: 'Add Work', label: 'Add Work', icon: '💼' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#3b68e7" />

            {/* Header with city image */}
            <View style={styles.header}>

                <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1442960535/photo/sustainble-green-building-eco-friendly-building-in-modern-city-sustainable-glass-office.jpg?s=612x612&w=0&k=20&c=YOY9Ka0n5I5s4DqyinkMZQafBIk_95NFCtsAu6v-cok=' }}
                    style={styles.cityImage}
                    resizeMode="cover"
                />
            </View>

            <ScrollView style={styles.content}  >


                {/* Location inputs */}
                <View style={styles.locationContainer}>
                    <View style={styles.locationInputWrapper}>
                        <View style={styles.locationDot} />
                        <TextInput
                            style={styles.locationInput}
                            placeholder="Enter pick up location"
                            value={pickupLocation}
                            onChangeText={setPickupLocation}
                            placeholderTextColor="#999"
                        />
                        <View style={styles.addButton2}>
                            <Text style={styles.addButtonText}></Text>
                        </View>
                    </View>


                    <View style={styles.locationLine} />

                    <View style={styles.locationInputWrapper}>
                        <View style={[styles.locationDot, styles.destinationDot]} />
                        <TextInput
                            style={styles.locationInput}
                            placeholder="Enter destination"
                            value={destination}
                            onChangeText={setDestination}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <LinearGradient
                    colors={['#e8eefb', '#c0d3ef']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={styles.freeRideBanner}>

                        <Text style={styles.freeRideIcon}>✓</Text>
                        <Text style={styles.freeRideText}>Verify your profile and get first ride free</Text>
                    </View>

                </LinearGradient>

                {/* Tab buttons */}
                <View style={styles.tabContainer}>
                    {tabButtons.map((tab) => (
                        <TouchableOpacity
                            key={tab.id}
                            style={[
                                styles.tabButton,
                                selectedTab === tab.id && styles.activeTabButton
                            ]}
                            onPress={() => setSelectedTab(tab.id)}
                        >
                            <Text style={styles.tabIcon}>{tab.icon}</Text>
                            <Text style={styles.tabLabel}>{tab.label}</Text>
                        </TouchableOpacity>
                    ))}
                    <Text style={styles.tabContainer}>💙</Text>

                </View>

                {/* Saved locations */}
                <View style={styles.savedLocationsContainer}>
                    {savedLocations.map((location) => (
                        <TouchableOpacity key={location.id} style={styles.savedLocationItem}>
                            <View style={styles.savedLocationIcon}>
                                <Text>🕐</Text>
                            </View>
                            <Text style={styles.savedLocationText}>{location.address}</Text>
                            <TouchableOpacity style={styles.favoriteButton}>
                                <Text style={styles.favoriteIcon}>
                                    {location.isFavorite ? '⭐' : '☆'}
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Profile completion */}
                <View style={styles.profileSection}>
                    <Text style={styles.profileTitle}>Complete Profile</Text>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFill} />
                    </View>
                    <View style={styles.profileStatus}>
                        <View style={styles.profileAvatar}>
                            <Text style={styles.avatarText}>👤</Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profilePercentage}>90% Pending</Text>
                            <Text style={styles.profileAction}>Add your details</Text>
                        </View>
                        <TouchableOpacity style={styles.verifyButton}>
                            <Text style={styles.verifyText}>✓ Verify Organization</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Pool and booking options */}
                <View style={styles.bookingSection}>
                    <View style={styles.poolOption}>
                        <Text style={styles.poolText}>Enable pool</Text>
                        <Switch
                            value={poolEnabled}
                            onValueChange={setPoolEnabled}
                            trackColor={{ false: '#ccc', true: '#4285F4' }}
                            thumbColor={poolEnabled ? '#fff' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.bookingOptions}>
                        <TouchableOpacity style={styles.bookingOption}>
                            <Text style={styles.optionIcon}>📅</Text>
                            <Text style={styles.optionText}>26 May 12:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookingOption}>
                            <Text style={styles.optionIcon}>📝</Text>
                            <Text style={styles.optionText}>Add note</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bookingOptions}>
                        <TouchableOpacity style={styles.bookingOption}>
                            <Text style={styles.optionIcon}>💳</Text>
                            <Text style={styles.optionText}>Cash</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookingOption}>
                            <Text style={styles.optionIcon}>🎫</Text>
                            <Text style={styles.optionText}>Apply coupon</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            {/* Bottom buttons */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.cityRidesButton}>
                    <Text style={styles.cityRidesText}>City Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4285F4',
    },
    time: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    statusIcons: {
        flexDirection: 'row',
    },
    statusText: {
        color: 'white',
        fontSize: 12,
    },
    cityImage: {
        width: '100%',
        height: 270,
    },
    content: {
        position: "relative",
        top: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#EDF2FA",
        flex: 1
    },
    freeRideBanner: {
        backgroundColor: '#4285F4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 55,
        // marginHorizontal: 16,
        marginTop: 16,
    },
    freeRideIcon: {
        color: 'white',
        fontSize: 16,
        marginRight: 8,
        fontWeight: 'bold',

    },
    freeRideText: {
        color: 'white',
        fontSize: 14,
        flex: 1,
    },
    locationContainer: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    locationInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    locationDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50',
        marginRight: 12,
    },
    destinationDot: {
        backgroundColor: '#F44336',
    },
    locationInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        color: '#333',
        borderColor: '#ccc',     // Border color (light gray)
        borderWidth: 1,          // Thickness of the border
        borderRadius: 6,         // Rounded corners (optional)
        paddingHorizontal: 12,   // Optional: add horizontal padding for better input spacing
    },
    locationLine: {
        width: 2,
        height: 20,
        backgroundColor: '#ddd',
        marginLeft: 6,
        marginVertical: 4,
    },
    addButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addButton2: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    tabButton: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    activeTabButton: {
        backgroundColor: '#4285F4',
    },
    tabIcon: {
        fontSize: 16,
        marginRight: 4,
    },
    tabLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    savedLocationsContainer: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    savedLocationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    savedLocationIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    savedLocationText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
    },
    favoriteButton: {
        padding: 4,
    },
    favoriteIcon: {
        fontSize: 16,
    },
    profileSection: {
        backgroundColor: '#cfd8e6',
        paddingVertical: 30,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 12,
        padding: 16,
    },
    profileTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    progressBar: {
        height: 4,
        backgroundColor: '#ddd',
        borderRadius: 2,
        marginBottom: 12,
    },
    progressFill: {
        height: '100%',
        width: '90%',
        backgroundColor: '#4285F4',
        borderRadius: 2,
    },
    profileStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        color: 'white',
        fontSize: 18,
    },
    profileInfo: {
        flex: 1,
    },
    profilePercentage: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    profileAction: {
        fontSize: 12,
        color: '#666',
    },
    verifyButton: {
        backgroundColor: '#4285F4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    verifyText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    },
    bookingSection: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 20,
        position: "relative",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#f7faff",
        flex: 1,

        // iOS shadow (only top)
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4, // negative height to move shadow upward
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,

        // Android shadow (elevation doesn't support direction, so we simulate it)
        elevation: 10,
        zIndex: 1,
    },
    poolOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 12,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    poolText: {
        fontSize: 16,
        color: '#333',
    },
    bookingOptions: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    bookingOption: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 4,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

    },
    optionIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    optionText: {
        fontSize: 14,
        color: '#333',
    },
    bottomButtons: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        top: -20,
    },
    cityRidesButton: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    cityRidesText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: '#4285F4',
    },
    confirmText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
});

export default RideshareApp;















