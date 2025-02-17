

export function Clock({ hours, minutes, seconds }: { hours: number, minutes: number, seconds: number }) {
  return (
    <h2>
      {`${hours}:${minutes}:${seconds}`}
    </h2>
  )
}