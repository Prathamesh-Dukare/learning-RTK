// * we create actions manually when we want to give that action type to any reducer , specifically to extrareducer

import { createAction } from '@reduxjs/toolkit'

export const ClearUsers = createAction("ClearAllUsers")