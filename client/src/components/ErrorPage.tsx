import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
	return (
		<div className="pt-7  error min-w-full text-center">
			<h1 className="text-2xl font-bold mb-3">
				Sorry, this page isn't available.
			</h1>
			<p className="mb-6">
				{" "}
				The link you followed may be broken, or the page may have been removed.
				Go back to Instagram.
			</p>
			<Link to={"/"}>Go Home</Link>
		</div>
	);
};

export default ErrorPage;
