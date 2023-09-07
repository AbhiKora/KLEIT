import { useNavigation } from '@react-navigation/native'
import React from 'react'

const MCAimg = require("../assets/images/PG/MCA.png");

function MCA(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={() => navigation.navigate("RM")}
        style={{ marginBottom: 20 }}
      >
        <Card>
          <Card.Cover source={MCAimg} style={{ height: 250 }} />
          <Card.Content>
            <Text
              variant="titleLarge"
              style={{ color: "white", fontSize: 20, paddingTop: 8 }}
            >
              MCA
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
}

export default function PG() {
  return (
    <MCA/>
  )
}
