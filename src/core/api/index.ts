import APIClient from './client'
import * as APIModule from './client/utils'

export const client = APIModule.client as APIClient

export const getEndpoint = APIModule.getEndpoint
