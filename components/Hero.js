export default function Hero(props) {

    if (props.video) {
        return (
            <iframe src={props.videoSource} title="background video of buildings"></iframe>
        );
    }

    return (
        <dev>Hello Image</dev>
    );
}