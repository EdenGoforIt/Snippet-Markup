# Index

the portal is used when you want to move the component outside the DOM hierarchy of the **parent** component. For example, the dialog is normally located inside the `<body>` element. When we add a `Dialog` in the `React`, it normally goes inside the component as below. Then we can use `Portal` to take the `dialog` modal out of the `parent` component.

# How

in `public/index.html`, add as below

```
<body>
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
</body>

```

in `dialog` modal, add as below

```
const Backdrop = (props) => {
		return <div className={classes.backdrop} onClick={props.onConfirm} />;
	};

	const ModalOverlay = (props) => {
		return (
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onConfirm}>Okay</Button>
				</footer>
			</Card>
		);
	};

	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					onConfirm={props.onConfirm}
					title={props.title}
					message={props.message}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);

```
