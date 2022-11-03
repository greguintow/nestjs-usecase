import { USECASE_HANDLER_METADATA } from './constants'

export const UseCaseHandler = (): ClassDecorator => {
  return (target: Function) => {
    Reflect.defineMetadata(USECASE_HANDLER_METADATA, target.name, target)
  }
}
