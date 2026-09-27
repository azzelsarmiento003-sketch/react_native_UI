import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState('Irvy Sarmiento');
  const [age, setAge] = useState('23');
  const [course, setCourse] = useState('BS Computer Science');
  const [yearSection, setYearSection] = useState('3rd Year - BSCS 3B');
  const [school, setSchool] = useState(
    'North West Samar State University'
  );
  const [location, setLocation] = useState('Calbayog City, Samar');
  const [hobby, setHobby] = useState('Playing games and listening to music');
  const [food, setFood] = useState('Chicken');
  const [dreamJob, setDreamJob] = useState('Firefighter');

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>My Profile</Text>

      <View style={styles.profileHeader}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileLetter}>I</Text>
        </View>

        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileCourse}>{course}</Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.label}>Full Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        ) : (
          <Text style={styles.info}>{name}</Text>
        )}

        <Text style={styles.label}>Age</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
        ) : (
          <Text style={styles.info}>{age}</Text>
        )}

        <Text style={styles.label}>Course</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={course}
            onChangeText={setCourse}
          />
        ) : (
          <Text style={styles.info}>{course}</Text>
        )}

        <Text style={styles.label}>Year & Section</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={yearSection}
            onChangeText={setYearSection}
          />
        ) : (
          <Text style={styles.info}>{yearSection}</Text>
        )}

        <Text style={styles.label}>School</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={school}
            onChangeText={setSchool}
          />
        ) : (
          <Text style={styles.info}>{school}</Text>
        )}

        <Text style={styles.label}>Location</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        ) : (
          <Text style={styles.info}>{location}</Text>
        )}

        <Text style={styles.label}>Hobby</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={hobby}
            onChangeText={setHobby}
          />
        ) : (
          <Text style={styles.info}>{hobby}</Text>
        )}

        <Text style={styles.label}>Favorite Food</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={food}
            onChangeText={setFood}
          />
        ) : (
          <Text style={styles.info}>{food}</Text>
        )}

        <Text style={styles.label}>Dream Job</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={dreamJob}
            onChangeText={setDreamJob}
          />
        ) : (
          <Text style={styles.info}>{dreamJob}</Text>
        )}

        <Pressable
          style={styles.button}
          onPress={() => setEditing(!editing)}
        >
          <Text style={styles.buttonText}>
            {editing ? 'Save Profile' : 'Edit Profile'}
          </Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1EA',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 20,
  },

  profileHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  profileCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#D8B08C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  profileLetter: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },

  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },

  profileCourse: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 22,
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: '#888888',
    marginTop: 8,
  },

  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 3,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333333',
    marginTop: 3,
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#8B6F47',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
