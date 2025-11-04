import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import PDFPersonalInfo from './PDFPersonalInfo';
import PDFSummary from './PDFSummary';
import PDFExperience from './PDFExperience';
import PDFEducation from './PDFEducation';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Times-Roman',
  },
  container: {
    flex: 1,
  },
});

const CVDocument = ({ cvData }) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.container}>
          <PDFPersonalInfo data={cvData.personal} />
          <PDFSummary data={cvData.summary} />
          <PDFExperience data={cvData.experience} />
          <PDFEducation data={cvData.education} />
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;