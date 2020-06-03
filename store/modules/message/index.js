import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    namespaced: true,
    state: () => ({
        currentRoom: -1,
        hasMenuNewMessage: false,
        hasRoomNewMessage: false,
        members: [],
        messages: [],
    }),
    getters,
    actions,
    mutations
};
