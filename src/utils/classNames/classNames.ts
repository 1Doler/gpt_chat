
type Mods = Record<string, boolean | string>

const classNames = (cls: string, mods: Mods = {}, additional: Readonly<string | undefined>[] = []): string => {
    return [
        cls,
        ...additional.filter((value) => Boolean(value)),
        ...Object.entries(mods)
         .filter(([, value]) => Boolean(value))
            .map(([mod]) => mod)
    ].join(" ")
}

export default classNames;
