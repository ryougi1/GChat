import * as React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomsData from '../assets/mock-data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => console.log('Load more if not all loaded')}
        // ListHeaderComponent={() => <Text>Possible header here</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {},
})
