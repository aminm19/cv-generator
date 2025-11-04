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
  summaryText: {
    fontSize: 12,
    color: '#000',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
});

const PDFSummary = ({ data }) => {
  if (!data || !data.trim()) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summaryText}>{data}</Text>
    </View>
  );
};

export default PDFSummary;