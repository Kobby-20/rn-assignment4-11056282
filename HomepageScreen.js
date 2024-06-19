import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', icon: 'https://cdn-icons-png.flaticon.com/512/733/73g3547.pn' },
  { id: '2', title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'California, US', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965309.png' },
  {
    id: '3', title: 'Product Manager', company: 'Facebook', salary: '$160,000', location: 'California, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',},
    {
    id: '4', title: 'Product Manager', company: 'Facebook', salary: '$160,000', location: 'California, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    }
  
];
const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
  },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png'},
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
  {
    id: '4', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
  }
];


const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Text style={styles.name}>Kobby</Text>
          <Text style={styles.email}>Kobby90@gmail.com</Text>
        </View>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.profileImage}
        />
      </View>
      <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featuredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.jobCard}>
            <Image source={{ uri: item.icon }} style={styles.jobIcon} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
            <Text style={styles.jobLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.popularJobCard}>
            <Image source={{ uri: item.icon }} style={styles.popularJobIcon} />
            <View style={styles.popularJobTextContainer}>
              <Text style={styles.popularJobTitle}>{item.title}</Text>
              <Text style={styles.popularJobCompany}>{item.company}</Text>
              <Text style={styles.popularJobSalary}>{item.salary}</Text>
              <Text style={styles.popularJobLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   color: 'black',
    display: 'flex',
    gap: 30,
    margin: 25,
    height: '100%',
    fontFamily: 'Arial',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  profileSection: {
    flex: 1,
  },
  profileImage: {
    width: 30,
    aspectRatio: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobCard: {
    backgroundColor: '#e0f7fa',
    marginRight: 10,
              borderRadius: 20,
              padding: 15,
              height: 180,
              display: 'flex',
              justifyContent: 'space-between',
  },
  jobIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCompany: {
    color: 'gray',
    marginBottom: 5,
  },
  jobSalary: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobLocation: {
    color: 'gray',
  },
  popularJobCard: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  popularJobIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  popularJobTextContainer: {
    flex: 1,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularJobCompany: {
    color: 'gray',
  },
  popularJobSalary: {
    fontWeight: 'bold',
  },
  popularJobLocation: {
    color: 'gray',
  },
});

export default HomepageScreen;
