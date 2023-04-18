export const metadata = {
    title: 'Territorios Alto do Baeta',
};

export default function Head() {
    return (
        <>
            <title>Territorios Alto do Baeta</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon2.ico" />
            {/* @ts-expect-error não existe tipagem ainda referente ao precedence="default" */}
            <link precedence="default" rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        </>
    )
}
