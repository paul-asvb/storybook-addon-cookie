import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { CookieParameter } from './types';
export interface DecoratorContext extends StoryContext<Renderer> {
    parameters: StoryContext['parameters'] & CookieParameter;
}
export declare const cookieDecorator: (storyFn: StoryFunction<Renderer>, { parameters }: DecoratorContext) => unknown;
