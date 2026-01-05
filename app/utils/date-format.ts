export const calculateDuration = (period?: string) => {
    if (!period || !period.includes(" - ")) return "";

    const parts = period.split(" - ");
    const startPart = parts[0] || "";
    const endPart = parts[1] || "";

    const parseDate = (dateStr: string) => {
        if (!dateStr || dateStr.toLowerCase() === "present") return new Date();

        const [month, year] = dateStr.split(" ");
        if (month && year) {
            return new Date(`${month} 1, ${year}`);
        }
        return new Date();
    };

    const startDate = parseDate(startPart);
    const endDate = parseDate(endPart);

    let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += endDate.getMonth() - startDate.getMonth();
    if (totalMonths <= 0) return "1 month";

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : "";
    const monthText = remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : "";

    return [yearText, monthText].filter(Boolean).join(" ");
};