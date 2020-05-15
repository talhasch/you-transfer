import {IAction} from '../types';

export enum ActionTypes {
    SET = '@files/SET',
    RESET = '@files/RESET',
    START = '@files/START',
    FINISH = '@files/FINISH',
    ITEM_START = '@files/ITEM_START',
    ITEM_PROGRESS = '@files/ITEM_PROGRESS',
    ITEM_FINISH = '@files/ITEM_FINISH',
    ITEM_ERROR = '@files/ITEM_ERROR',
}

interface BaseAction {
    type: ActionTypes
}

export interface SetAction extends BaseAction {
    type: ActionTypes.SET;
    files: Array<File>;
}

export interface ResetAction extends BaseAction {
    type: ActionTypes.RESET;
}

export interface StartAction extends IAction {
    type: ActionTypes.START
}

export interface FinishAction extends IAction {
    type: ActionTypes.FINISH
}

export interface ItemStartAction extends IAction {
    type: ActionTypes.ITEM_START,
    itemId: number
}

export interface ItemProgressAction extends IAction {
    type: ActionTypes.ITEM_PROGRESS,
    itemId: number
}

export interface ItemFinishAction extends IAction {
    type: ActionTypes.ITEM_FINISH,
    itemId: number
}

export interface ItemErrorAction extends IAction {
    type: ActionTypes.ITEM_ERROR,
    itemId: number
}

export type Action = SetAction | ResetAction | ResetAction | StartAction | FinishAction | ItemStartAction | ItemProgressAction | ItemFinishAction | ItemErrorAction;


export interface Item {
    id: number,
    obj: File,
    status: ItemStatus,
    progress: number
}

export enum ItemStatus {
    READY = 1,
    UPLOADING = 2,
    UPLOADED = 3
}


export interface State {
    list: Array<Item>,
    inProgress: boolean
}
