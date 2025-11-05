import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '2 solid #333',
  },
  nameSection: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  contactInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  contactItem: {
    fontSize: 10,
    color: '#333',
    marginBottom: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

const PDFPersonalInfo = ({ data }) => {
  if (!data) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameSection}>
          <Text style={styles.name}>{data.fullName || 'Your Name'}</Text>
          <Text style={styles.jobTitle}>{data.jobTitle}</Text>
        </View>
        
        <View style={styles.contactInfo}>
          {data.phone && <Text style={styles.contactItem}>{data.phone}</Text>}
          {data.email && <Text style={styles.contactItem}>{data.email}</Text>}
          {data.address && <Text style={styles.contactItem}>{data.address}</Text>}
          {(data.city || data.state) && (
            <Text style={styles.contactItem}>
              {data.city}{data.city && data.state ? ', ' : ''}{data.state}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default PDFPersonalInfo;