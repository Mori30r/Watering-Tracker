export function timeDifference(time1, time2) {
    const differenceInDays = Math.floor(
        (time1 - time2) / (1000 * 60 * 60 * 24)
    );
    const differenceInHours = Math.floor((time1 - time2) / (1000 * 60 * 60));
    const differenceInMinutes = Math.floor((time1 - time2) / (1000 * 60));

    if (differenceInDays == 0) return `${differenceInHours} Hours`;
    else if (differenceInHours == 0) return `${differenceInMinutes} Minutes`;
    else return `${differenceInDays} Days`;
}
