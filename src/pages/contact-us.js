import Img from "gatsby-image";
import Link from "gatsby-link"

import Layout from "../components/layout"
import Container from "../components/L1-1"


export default (props) =>
  <Layout active="contact-us">
    <div style={{ margin: '0 1rem' }}>
    <h1>Contact Us</h1>
    <p>
    Please contact us to schedule a free phone consultation and review of your case.
    </p>
    <p>
    We look forward to hearing from you.
    </p>

    <div
      css={{
        '@media (max-width: 599px)': {
          display: `grid`,
          gridTemplateColumns: `auto`,
        },
        '@media (min-width: 600px)': {
          display: `grid`,
          gridColumnGap: `35px`,
          gridTemplateColumns: `auto 33%`,
        },
      }}
    >

    <div>
      <form>
      <div>
        Name <span class="required">*</span>
      </div>
      <div>
        <div
          css={{
            display: `grid`,
            gridColumnGap: `20px`,
            gridTemplateColumns: 'auto auto',
          }}
        >
          <div>
          <input style={{ width: '100%' }} required name="first-name" type="text" spellcheck="false" />
          </div>
          <div>
          <input style={{ width: '100%' }} required name="last-name" type="text" spellcheck="false" />
          </div>
          <div>
            <small>First Name</small>
          </div>
          <div>
            <small>Last Name</small>
          </div>
        </div>

        <div style={{ height: 20 }}>&nbsp;</div>
        <div>
          Email Address <span class="required">*</span>
        </div>
        <div>
        <input style={{ width: '100%' }} name="email" type="text" required spellcheck="false" />
        </div>

        <div style={{ height: 20 }}>&nbsp;</div>
        <div>
				  Brief Description of Your Legal Issue <span class="required">*</span>
        </div>
        <div>
				  <textarea style={{ width: '100%' }} rows="5" name="description"></textarea>
        </div>

        <div style={{ height: 20 }}>&nbsp;</div>
        <div>
          Phone
        </div>
        <div>
        <input style={{ width: '100%' }} name="phone" type="text" spellcheck="false" />
        </div>

        <div style={{ height: 20 }}>&nbsp;</div>
        <div>
          <input type="checkbox" required name="agree" value="I understand that submission
          of this form does not establish an attorney-client relationship.  I
          also understand that I should not submit confidential or time-sensitive
          information through this form." />
          <small style={{ marginLeft: 10 }}>
          I understand that submission of this
          form does not establish an attorney-client relationship.  I also
          understand that I should not submit confidential or time-sensitive
          information through this form.
          </small>
        </div>

        <div style={{ height: 20 }}>&nbsp;</div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </div>
      </form>
    </div>

    <div>
      <br/>
      <p>
      KOSINSKI AND THIAGARAJ, LLP<br/>
      201 Filbert Street, Ste. 201<br/>
      San Francisco, CA 94133<br/>
      </p>

      <p>
      T 415-230-2860<br/>
      F 415-723-7099<br/>
      E info@ktlawsf.com<br/>
      </p>
    </div>
    </div>
    </div>
  </Layout>
