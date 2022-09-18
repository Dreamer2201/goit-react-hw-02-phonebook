import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return <Section>
        {title && <title className="title">{title}</title>}
        {children}
    </Section>
}
Section.propTypes = {
    title: PropTypes.string,
}