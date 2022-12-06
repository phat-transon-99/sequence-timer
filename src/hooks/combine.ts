import BooleanHook from './types';

const useCombineBooleanHooks: BooleanHook = (...args: BooleanHook[]) => {
  const results: boolean[] = args.map((hook) => hook());
  return results.every((result) => result === true);
};

export default useCombineBooleanHooks;
