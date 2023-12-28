// export const myAction = ( state ) => {

// }

export const setEntries = (state, entries) => {
   state.entries = [...state.entries, ...entries];
   state.isLoading = false;
};

export const updateEntry = (state, entry) => {
   const indice = state.entries.map((e) => e.id).indexOf(entry.id);
   console.log({ indice });
   state.entries[indice] = entry;
   // state.isLoading = false;
};

export const addEntry = (state, entry) => {
   state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
   state.entries = state.entries.filter((entry) => entry.id !== id);
};
