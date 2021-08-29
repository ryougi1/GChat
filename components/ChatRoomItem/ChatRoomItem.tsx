import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'

export default function ChatRoomItem({ chatRoom }: any) {
  //TODO: User compare with current
  const user = chatRoom.users[1]

  return (
    <View style={styles.container}>
      <View style={styles.leftCol}>
        <Image source={{ uri: 'https://picsum.photos/50' }} style={styles.image} />
        {chatRoom.nrNewMessages ? (
          <View style={styles.counterBadge}>
            <Text style={styles.counterBadgeText}>{chatRoom.nrNewMessages}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.rightCol}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  )
}

//TODO: Fix time
