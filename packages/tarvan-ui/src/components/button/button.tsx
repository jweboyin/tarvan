import React from 'react'
import type { FC, ReactNode } from 'react'
import { ButtonProps as TaroButtonProps } from '@tarojs/components/types/Button';
import { withNativeProps } from '../../utils/native-props'
import type { NativeProps } from '../../utils/native-props'
import { bemBlock, bemElement, getBlockName } from '../../utils/bem'

const BLOCK = 'button'
const BLOCK_NAME = getBlockName('button')

