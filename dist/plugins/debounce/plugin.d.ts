export default function DebouncePlugin(): (() => void) & {
    pluginName: string;
};
