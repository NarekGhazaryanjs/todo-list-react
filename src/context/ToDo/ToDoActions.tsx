
export const ACTION_TYPES = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    DONE: 'DONE',
    FILTER: 'FILTER',
    DELETE_COMPLETED: "DELETE_COMPLETED"
}

export const actionAdd = (title: string, description: string) => ({
    type: ACTION_TYPES.ADD,
    payload: {
        title,
        description
    }
});

export const actionDelete = (id: number) => ({
    type: ACTION_TYPES.DELETE,
    payload: { id }
}
)
export const actionEdit = (id: number, title: string, description: string) => ({
    type: ACTION_TYPES.EDIT,
    payload: {
        id,
        title,
        description
    }
})
export const actionDone = (id: number, isDone: boolean) => ({
    type: ACTION_TYPES.DONE,
    payload: {
        id,
        isDone
    }
})

export const actionFilter = (title: string) => ({
    type: ACTION_TYPES.FILTER,
    payload: {
        title
    }
})

export const actionDeleteCompleted = () => {
    return {
        type: ACTION_TYPES.DELETE_COMPLETED,
    }
}
