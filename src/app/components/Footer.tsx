export default function Footer({}) {
    return (
        <div className="mt-20 border-t border-neutral-200 dark:border-neutral-600 p-10 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col text-lg">
                <span>&copy; BLUEPRINT</span>
                <span className="text-sm">2024</span>
            </div>
            <div className="flex flex-col text-lg text-right">
                <span>Information is fictional</span>
                <span className="text-sm">Meant for illustrative purposes.</span>
            </div>
        </div>
    )
}