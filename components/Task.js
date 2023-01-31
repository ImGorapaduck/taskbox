
import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../constants/globalStyles';
// import PercolateIcons from '../constants/Percolate';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <SafeAreaView style={styles.ListItem}>
            <TouchableOpacity onPress={() => onArchiveTask(id)}>
                {state !== 'TASK_ARCHIVED' ? (
                    <View style={styles.CheckBox} />
                ) : (
                    // <PercolateIcons name="check" size={20} color={'#2cc5d2'} />
                    <Text>Check</Text>
                )}
            </TouchableOpacity>
            <TextInput
                placeholder="Input Title"
                style={
                    state === 'TASK_ARCHIVED' ? styles.ListItemInputTaskArchived : styles.ListItemInputTask
                }
                value={title}
                editable={false}
            />
            <TouchableOpacity onPress={() => onPinTask(id)}>
                {/* <PercolateIcons
                    name="star"
                    size={20}
                    color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
                /> */}<Text>Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};