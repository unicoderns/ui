import { ModalSizeVariant } from "../../../types";

export interface ModalDialogModel {
  title: string,
  body: string,
  animate: boolean,
  dismissible: boolean,
  disableBackdrop: boolean,
  disableEscKey: boolean,
  autoFocus: boolean,
  scrollable: boolean,
  verticalCenter: boolean,
  show: boolean,
  size?: ModalSizeVariant,
  ['aria:role']: string
  ['aria:buttonClose']: string
  ['aria:title']: string
  ['aria:body']: string
}
