import { useEffect } from 'react'

const SECTIONS = [
  {
    num: '2.',
    title: 'Amendments',
    text: 'C.G. Ltd. reserves the right to amend or change its terms and conditions at its sole discretion.',
  },
  {
    num: '3.',
    title: 'Decisions',
    text: 'All decisions of C.G. Ltd. will be final and binding on members of the T.F.C., their guests and any other visitors.',
  },
  {
    num: '4.',
    title: 'Liability',
    text: 'Neither T.F.C. nor C.G. Ltd. accept any responsibility whatsoever for any accident, injury or loss suffered by anyone visiting or using any of the facilities provided at the T.F.C. or The Guernsey Tennis Centre. Application and acceptance of membership constitutes express acknowledgement of these terms.',
  },
  {
    num: '5.',
    title: 'Memberships',
    text: `Membership shall be either Gold Membership or Casual Membership. The categories of membership are Single, Over 65 Off-peak, 15 Year Apprentice, Student Over 16, Tourist, Per Session and Other. All categories of membership shall be subject to these Terms and Conditions of Membership which are in force at the time. Other categories of membership shall be stipulated by the T.F.C. from time to time.

Membership is not transferable to another person.

The decision to accept the application of a potential member shall be at the sole discretion of the T.F.C.`,
  },
  {
    num: '6.',
    title: 'Membership Fees',
    text: `All members are liable to pay all annual or monthly membership fees irrespective of actual usage of the T.F.C.

Members may elect to pay their membership fees in monthly instalments (Standing Order), advanced payment or monthly fees.

The T.F.C. reserves the right to increase Membership fees on a yearly basis. If paying by standing order, payments are deducted on the first of each month and for every consecutive month thereafter. The T.F.C. will continue to take monthly standing order instalments until the Member cancels their membership.

On termination of Membership it is the Member's responsibility to cancel the standing order payment with their bank before the next payment is due. No fees paid will be refunded.`,
  },
  {
    num: '7.',
    title: 'Membership Cards',
    text: `Each member will be issued with a numbered membership card which must be presented at each visit to the T.F.C.

Lost or damaged membership cards will be subject to a replacement charge being made by the T.F.C.`,
  },
  {
    num: '8.',
    title: 'Health and Safety',
    text: `Participation in exercise involves the risk of injury and even the possibility of death. You exercise at your own risk; your health and safety is your responsibility.

You should therefore never exercise beyond your ability. You should not attempt to use any equipment or engage in any activity unless you are confident in the correct and safe use of said equipment and satisfied with your knowledge of the proper and safe procedures of the activity.

All members must read and abide by Health and Safety Rules as displayed in the gym. A copy is available at the counter.

The Management and Staff regularly check and clean the equipment and facilities. If you notice any problems with the equipment or spillages please report them to a member of staff.`,
  },
  {
    num: '9.',
    title: 'Dress Code and Behaviour',
    text: `Appropriate gym clothing consisting of tops, trousers or shorts and gym footwear must be worn at all times, including the outside area. Suitable gym footwear must be worn in all areas of the T.F.C. unless taking part in an organised Martial Arts activity.

All members, guests and visitors to the T.F.C. are expected to respect the normal rules of decorum and not behave in an anti-social or disruptive manner and not to use offensive language. Any issues regarding behaviour should be reported to the management.

Any member causing damage by abusing equipment and/or damaging mirrors will be liable to pay for damage caused.

You are not permitted to use photographic or recording devices throughout all areas of the T.F.C. and The Guernsey Tennis Club including all outside areas, without prior permission of the management.`,
  },
  {
    num: '10.',
    title: 'Expulsion or Termination of Membership',
    text: `C.G. Ltd. and the management of the T.F.C. reserve the right to expel any member or terminate the membership of any member without notice and with immediate effect if the member's conduct is the subject of a complaint by another member or group of members, is such that in the reasonable opinion of the T.F.C. it may be injurious to the character, name or interests of the T.F.C., or renders the member unfit to associate with other members or use the facilities.

The management of the T.F.C. has sole discretion in this matter and there is no obligation on the part of the management to disclose their reasons for their decision.

A member whose membership is terminated by the T.F.C. shall forfeit all privileges of membership with immediate effect without entitlement to any claim for any refund of their annual or monthly membership fee. On termination of their membership, the member shall return forthwith their membership card.`,
  },
  {
    num: '11.',
    title: 'Supervision',
    text: 'Areas of the Gym in the T.F.C. will at times be unsupervised, as are the Sauna, Steam Room and changing areas. Members are advised that they use these facilities entirely at their own risk and whilst every effort has been made to ensure the safety of individuals, the management can accept no responsibility for accident or injury.',
  },
  {
    num: '12.',
    title: 'Facilities',
    text: 'The T.F.C. reserves the right to make reasonable alterations to the type of facilities provided without notice and the T.F.C. shall not be liable for any inconvenience caused by building works and for the provision of essential maintenance services, due to matters beyond our control.',
  },
  {
    num: '13.',
    title: 'Hours of Opening',
    text: 'Information in relation to the T.F.C. normal hours of operation and the opening hours of the facilities are available upon request. Such hours of operation may be lengthened or shortened at the absolute discretion of the T.F.C. with or without any prior notice being given to members. The T.F.C. shall endeavour to give members reasonable notice of change to such hours.',
  },
  {
    num: '14.',
    title: 'Personal Trainers',
    text: 'Personal Training is available through independent Personal Trainers at the T.F.C. This is available through a separate contract between you and the Personal Trainer who is using our facility.',
  },
  {
    num: '15.',
    title: 'Smoking',
    text: 'A strict no smoking policy (including Vaping) exists throughout all areas of the T.F.C. and The Guernsey Tennis Club. This includes all outside areas including the car park.',
  },
  {
    num: '16.',
    title: 'Animals',
    text: 'No dog (other than a Guide Dog for the blind, or a Hearing Dog for the deaf) or other animal shall be admitted to the T.F.C. or The Guernsey Tennis Club. This includes all outside areas.',
  },
]

export default function TermsAndConditions({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'var(--black)', overflowY: 'auto',
    }}>
      {/* Sticky header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--dark-border)',
        padding: '16px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--white)' }}>Terms & Conditions</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>The Trainstation Fitness Centre · C.G. Ltd.</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'var(--dark-mid)', border: '1px solid var(--dark-border)', color: 'var(--white)',
              borderRadius: 'var(--radius-sm)', padding: '8px 18px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 8, transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--dark-border)'}
          >
            ← Back to site
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 64, paddingBottom: 80, maxWidth: 800 }}>
        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', display: 'block', marginBottom: 12 }}>
            Legal
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--white)', marginBottom: 16 }}>
            TERMS &amp;<br />CONDITIONS
          </h1>
          <div style={{ width: 60, height: 4, background: 'var(--red)', borderRadius: 2, marginBottom: 20 }} />
          <p style={{ color: 'var(--muted-light)', fontSize: '1rem', maxWidth: 600 }}>
            The following terms and conditions govern membership and use of The Trainstation Fitness Centre (T.F.C.), operated by Crusader Gyms Limited (C.G. Ltd.).
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {SECTIONS.map((s) => (
            <div key={s.num} style={{
              borderTop: '1px solid var(--dark-border)',
              padding: '28px 0',
            }}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700,
                  color: 'var(--red)', minWidth: 32, letterSpacing: '0.04em',
                }}>
                  {s.num}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem', fontWeight: 600, color: 'var(--white)',
                    letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12,
                  }}>
                    {s.title}
                  </h3>
                  {s.text.split('\n\n').map((para, i) => (
                    <p key={i} style={{
                      fontSize: '0.95rem', color: 'var(--muted-light)', lineHeight: 1.8,
                      marginBottom: i < s.text.split('\n\n').length - 1 ? 14 : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: 28 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              For any questions regarding these terms, please contact us at{' '}
              <a href="mailto:info@thetrainstation.co.gg" style={{ color: 'var(--red)' }}>info@thetrainstation.co.gg</a>{' '}
              or call <a href="tel:01481726684" style={{ color: 'var(--red)' }}>01481 726684</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
