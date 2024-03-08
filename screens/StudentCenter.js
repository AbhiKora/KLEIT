import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import * as DocumentPicker from 'expo-document-picker';
import { getMimeType } from 'react-native-mime-types';

export default StudentCenter = () => {
  const recipient = 'abhikora131201@gmail.com';
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');
  const [attachments, setAttachments] = React.useState([]);

  const pickAttachments = async () => {
    const results = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true,
      });
      alert(results)
      if (results.type === 'success') {
        const newAttachments = results.map((uri) => {
            const extension = uri.split('.').pop(); // Get file extension
            console.log(`Picked file: ${uri}, extension: ${extension}`);
            const mimeType = getMimeType(extension); // Use getMimeType
      
            return { uri, mimeType };
          });
      }
  };

  const sendEmail = async () => {
    if (!recipient || !subject || !body) {
      alert('Please fill in all fields');
      return;
    }

    const mailOptions = {
      recipients: [recipient],
      subject,
      body,
      attachments,
    };

    try {
      await MailComposer.composeAsync(mailOptions);
      alert('Email sent successfully!');
    } catch (error) {
      alert('Error sending email: ' + error.message);
    }
  };

  return (
    <View>
      <Text>Recipient Email: {recipient}</Text>
      <TextInput value={subject} onChangeText={setSubject} placeholder="Subject" />
      <TextInput value={body} onChangeText={setBody} placeholder="Body" multiline />
      <Button title="Attach Files" onPress={pickAttachments} />
      <Button title="Send Email" onPress={sendEmail} />
    </View>
  );
};
