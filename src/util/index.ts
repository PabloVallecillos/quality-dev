export const util = {
    trimString(s: string, n = 140): string {
        return s.length > n ? s.substring(0, n) + '...' : s;
    }
}
