import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d73527',
    textTransform: 'uppercase',
    borderBottom: '1 solid #d73527',
    paddingBottom: 2,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  experienceEntry: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: '0.5 solid #ddd',
  },
  position: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  company: {
    fontSize: 12,
    color: '#666',
    marginBottom: 1,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  dateRange: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  description: {
    fontSize: 11,
    color: '#555',
    lineHeight: 1.3,
    textAlign: 'justify',
  },
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

const PDFExperience = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Experience</Text>
      
      {data.map((experience, index) => (
        <View key={experience.id || index} style={styles.experienceEntry}>
          <Text style={styles.position}>
            {experience.position || 'Position Title'}
          </Text>
          
          <Text style={styles.company}>
            {experience.company || 'Company Name'}
          </Text>
          
          {experience.location && (
            <Text style={styles.location}>{experience.location}</Text>
          )}
          
          <Text style={styles.dateRange}>
            From: {formatDate(experience.startDate) || 'Start Date'}
            {' '}To: {experience.current ? 'Present' : (formatDate(experience.endDate) || 'End Date')}
          </Text>
          
          {experience.description && (
            <Text style={styles.description}>{experience.description}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default PDFExperience;