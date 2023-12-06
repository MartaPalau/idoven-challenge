"use client"

import React, { createContext } from 'react';
import { IPageContext } from '@/app/types/page';

interface IProps {
  children: React.ReactNode;
  context: IPageContext['contextData'];
}

export const PageContext = createContext({});

export const PageContextProvider: React.FC<IProps> = ({
  context,
  children,
}) => <PageContext.Provider value={context}>{children}</PageContext.Provider>;
