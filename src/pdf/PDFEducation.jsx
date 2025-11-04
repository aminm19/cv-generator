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
  educationEntry: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: '0.5 solid #ddd',
  },
  degree: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  school: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  dateRange: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  gpa: {
    fontSize: 11,
    color: '#555',
  },
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

const PDFEducation = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Education</Text>
      
      {data.map((education, index) => (
        <View key={education.id || index} style={styles.educationEntry}>
          <Text style={styles.degree}>
            {education.degree || 'Degree Name'}
          </Text>
          
          <Text style={styles.school}>
            {education.school || 'School/University Name'}
          </Text>
          
          <Text style={styles.dateRange}>
            {formatDate(education.startDate) || 'Start Date'}
            {' - '}
            {formatDate(education.endDate) || 'End Date'}
          </Text>
          
          {education.gpa && (
            <Text style={styles.gpa}>GPA: {education.gpa}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default PDFEducation;