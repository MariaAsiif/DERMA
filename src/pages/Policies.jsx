import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Layout from '../components/Layout/Layout'
import { useState } from 'react'
const Policies = () => {
    const [active, setActive] = useState(null)

    const content = [{ heading: "equality protocol", para_1: "Derma Medical strongly opposes any acts of inequality and discrimination based on age, gender ethnicity, disability or religion. As such Derma medical has a policy for all candidates that the delivery or training and assessment is based solely on professional background, entry requirements and standardised assessments of the clinical procedures examined. Equally, staff appointment at Derma Medical follows the same protocols, whereby, employment is determined according to meeting set requirements and having the relevant credentials and criteria in order to carry out the relevant duties.", para_2: "Derma Medical respects candidates and staff from all religious or non-religious backgrounds, ethnicities and beliefs. Derma Medical has a zero-tolerance policy for victimisation, bullying or harassment and disciplinary action may be taken should any of these factors of the equality policy be breached.", para_3: "All Derma Medical staff will be made aware of the equality protocol and will be briefed prior to each stage 2 or 3 assessment. Candidates will also be made aware of this upon delegate recruitment. Directors and supervisors will receive training on issues of equality and diversity upon appointment and employment practices and procedures will be reviewed regularly to ensure fairness to all staff and candidates alike.", para_4: "Any member of staff or candidate who feels that this protocol has been breached, or that aspects of inequality or discrimination has occurred has two routes to raise their concerns:", Informaly: "This route would be direct via the assessor/examiner either in person or via e-mail to the Educational Director.", Formally: "Formal complaints/appeals must be submitted in writing via the complaints procedure through our appeals protocol to the Managing Director." }, { heading: "health and safety protocol", para_1: "Derma Medical has set policies for ensuring health and safety of all staff, candidates and treated cosmetic models. All staff, candidates, and patients are informed of Health and Safety matters prior to the course stages. The training premises at Derma Medical undergo regular health and safety inspection checks ensuring a safe workplace for training purposes.", para_2: "Fire exits are clearly marked and equipment (including first aid boxes) provided in the event of a fire/accident. A fire warning alarm is sounded with clear instructions to evacuate should such an event occur. Access to emergency services is available should a situation occur that cannot be managed at Derma Medical’s training facility.", para_3: "Prior to any stage of training or assessment, examiners and clinic coordinators carry out checks on equipment that will be used. Syringes and chemicals that are used during training are inspected to make sure these are in-date and stored at the appropriate temperatures prior to reconstitution. Injecting equipment and needles are appropriately stored and disposed of after use in the sharps-bins provided. Sterile cleaning wipes and gloves are provided for hygiene purposes. These aspects, plus hand hygiene form part of the standardised assessment prior to carrying out treatments and will be inspected by the training supervisors.", para_4: "Violence is not tolerated at the training premises. 24-hour security is provided and relevant action will be taken if violent acts towards staff or candidates occur. If candidates partake in violence or any form of abuse towards each other or staff members, disciplinary action may be taken which could affect their award of credit.", para_5: "Health and safety protocols are the responsibility of all staff involved in the running of the training stages and will be reviewed annually for quality assurance purposes." }, { heading: "entry criteria for training ", para_1: "Derma Medical recognises the latest recommendations which outline the qualification requirements for delivery of nonsurgical cosmetic interventions. As such Derma Medical’s entry criteria for training have been adjusted to enable training of certain health care professionals that meet these requirements. The purpose of these training requirements, upheld by Derma Medical is to equip our candidates with the level of skill, knowledge, and experience to be able to carry out nonsurgical cosmetic injectable treatments confidently and independently to a high standard that ensures patient safety." }, { heading: "diversity and equality policy ", para_1: "Derma Medical strongly opposes any acts of inequality and discrimination based on age, gender ethnicity, disability or religion. As such Derma medical has a policy for all candidates that the delivery of training and assessment is based solely on professional background, entry requirements and standardized assessments of the clinical procedures examined. Equally, staff appointment at Derma Medical follows the same protocols, whereby, employment is determined according to meeting set requirements and having the relevant credentials and criteria to carry out relevant duties as required according to the job role", para_2: "Derma Medical respects candidates and staff from all religious or non-religious backgrounds, ethnicities and beliefs. Derma Medical has a zero-tolerance policy for victimisation, bullying or harassment and disciplinary action may be taken should any of these factors of the equality policy be breached.", para_4: "Any member of staff or candidate who feels that this protocol has been breached, or that aspects of inequality or discrimination has occurred has two routes to raise their concerns:", Informaly: "This route would be direct via the assessor/examiner either in person or via e-mail to the Educational Director.", Formally: "Formal complaints/appeals must be submitted in writing via the complaints procedure through our appeals protocol to the Managing Director." }, { heading: "SAFEGUARDING YOUNG PEOPLE AND VULNERABLE ADULTS POLIC " },]

    const handleControl = (i) => {
        if (active === i) {
            setActive('')
        }
        else {
            setActive(i)
        }
    }
    return (
        <Layout>
            <div className='container mx-auto  xl:px-20 px-5'>
                <ul className='py-20'>
                    {
                        content.map((item, i) => (
                            <li className='border-b border-dotted my-5 pb-2'>
                                <div className='flex flex-row  '>
                                    <div>
                                        <MdKeyboardArrowRight className={` text-[25px] text-[#00002d] ${active === i && 'rotate-90'}`} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h2 onClick={() => handleControl(i)} className='uppercase font-normal cursor-pointer font-sans px-1 text-[16px]'>{item?.heading}</h2>
                                        <div className={`pt-3 ${active === i ? 'block delay-150 ease-in-out' : 'hidden'}`}>

                                            {
                                                i === 4 &&
                                                <>
                                                    <div className=''>
                                                        <p className='text-[#999999] font-bold py-5 font-sans '>Statement of purpose</p>
                                                        <ul className=' list-disc pl-5 text-[#999999]'>
                                                            <li>To promote an environment that is safe, where staff and learners treat each other with mutual respect and develop good relationships built on trust.</li>
                                                            <li>To raise the awareness of all staff, teaching and non-teaching, of the need to safeguard young people and vulnerable adults and of their rights and responsibilities in identifying and reporting possible cases of abuse.</li>
                                                            <li>To provide a systematic means of supporting young people and vulnerable adults known or thought to be at risk of harm.</li>
                                                            <li>To ensure that appropriate risk assessments are undertaken by IQ Centre’s and other managers to ensure that learners are safeguarded.</li>
                                                            <li>To ensure that relevant information about a young person or vulnerable adult at risk of harm is disseminated to appropriate staff within the centre on a ‘need to know’ basis.</li>
                                                            <li>To ensure that all staff who have access to young people or vulnerable adults have been checked for their suitability.</li>

                                                        </ul>

                                                        <p className='text-[#999999] font-bold py-5 font-sans '>Definitions</p>
                                                        <p className='text-[#999999] py-2 font-sans '>For the purposes of the Child and Vulnerable Adult Protection Policy</p>
                                                        <ul className=' list-disc pl-5 text-[#999999]'>
                                                            <li>a ‘young person’ means any person under the age of 18 (i.e. those who have not yet reached their 18th birthday).</li>
                                                            <li>a ‘vulnerable adult’ means any person “who is or may be in need of community care services by reason of mental or other disability, age or illness; and who is or may be unable to take care of him or herself, or unable to protect him or herself against significant harm or exploitation because of mental or other disability, age or illness.”</li>
                                                            <li>‘Staff’ means all employees, full-time and part-time, and all agency, contract and volunteer staff working for IQ group of companies. Key Safeguarding Principles The needs of the young person are paramount and underpin all child protection work and resolve any conflict of interests</li>
                                                            <li>All young people have the right to be safeguarded from harm and exploitation</li>
                                                            <li>IQ Centres have a responsibility to provide a safe environment and minimise risks of harm to young people’s welfare</li>
                                                            <li>Centre staff have a responsibility to identify young people who are suffering or likely to suffer significant harm and take appropriate action with the aim of making sure they are kept safe.</li>
                                                            <li>Responsibility for protection of young people must be shared because young people are safeguarded only when all relevant agencies and individuals accept responsibility and co-operate with one another</li>
                                                            <li>Statements about or allegations of abuse or neglect made by young people must be taken seriously</li>

                                                        </ul>
                                                    </div>

                                                    <div className="pt-5">
                                                        <p className='text-[#999999] font-bold py-2'>Responsibility for Child and Vulnerable Adult Protection</p>
                                                        <p className='text-[#999999] '>
                                                            All IQ centre’s must ensure that they have the relevant DBS (Disclosure & Barring Service) checks in place for all front line trainers and personnel who come into contact with young adults under the age of 18. IQ Ltd will need to see evidence of these checks as part of the quality assurance process.
                                                            <br />
                                                            <br />
                                                            The nominated Director, Ann Marie Gillett, will be responsible for the implementation of the child and vulnerable adult protection policy and procedures. IQ Ltd will in addition have a Safeguarding and Protection team who will deputise for the Director and will also lead on the implementation of this policy in the areas of the company for which they have responsibility. The Safeguarding and Protection Team will include:

                                                            <br />
                                                            <br />
                                                            Dr Sanah Qasem (Clinical and Educational director) and Annemarie Gillett (Managing Director)
                                                            All staff are expected to contact one of the Safeguarding and Protection Team for advice, when necessary or to make referrals.
                                                            <br />
                                                            <br />

                                                            All staff will familiarise themselves with this policy as part of their induction and will be noted on each individuals training record. Refresher training will be provided to all employees to update on legislation changes.

                                                        </p>
                                                    </div>

                                                </>
                                            }






                                            <p className={`pt-5 text-[#999999] text-[15px] font-normal font-sans ${item?.para_1 ? 'block' : 'hidden'}`}>{item?.para_1}</p>
                                            {
                                                i === 2 &&
                                                <>
                                                    <p className='text-[#999999] pt-5 font-bold font-sans '>Derma Medical’s cosmetic training courses are suitable for the following healthcare professionals qualified in the following medical backgrounds:</p>
                                                    <div className='pt-5 text-[#999999]'>
                                                        <p>
                                                            – Medicine

                                                        </p>
                                                        <p>
                                                            – Dentistry
                                                        </p>
                                                        <p>

                                                            – Nursing
                                                        </p>
                                                    </div>
                                                    <p className='pt-5 text-[#999999]'>
                                                        Candidates who meet the above criteria will be eligible for completion of training in the delivery of nonsurgical cosmetic injectable anti-wrinkle and dermal filler treatments. However, Derma Medical recognises that some of the above candidates may lack the ability to prescribe independently. As such, these candidates, in accordance with their professional registration, must only practice under the clinical oversight of a Medical, Dental, Nursing, professional who has independent prescribing rights. Derma Medical will ask for evidence of professional membership and independent prescribing rights prior to enrolment of training.
                                                    </p>


                                                </>
                                            }

                                            <p className={`pt-5 text-[#999999] text-[15px] font-normal font-sans ${item?.para_2 ? 'block' : 'hidden'}`}>{item?.para_2}</p>

                                            {
                                                i === 3 &&
                                                <>
                                                    <p className='text-[#999999] pt-5 font-bold font-sans '>Statement of Purpose</p>
                                                    <p className='pt-5 text-[#999999]'>
                                                        To ensure that assessment procedure is open, fair and free from bias and to the required standard – and that no disadvantage or advantage is accrued to any group of learners or individuals.
                                                    </p>
                                                    <p className='text-[#999999] pt-5 font-bold font-sans '>Diversity and Equality</p>
                                                    <p className='pt-5 text-[#999999]'>
                                                        We are committed to ensuring that there are no artificial barriers to entry or delivery of qualifications and that qualifications are:
                                                    </p>

                                                    <div className='pt-5'>
                                                        <ul className=' list-disc pl-5 text-[#999999]'>
                                                            <li>available to everyone who can achieve the required standard</li>
                                                            <li>free from barriers which restrict access and progression</li>
                                                            <li>free from overt or covert discriminatory practices</li>
                                                            <li>able to accommodate reasonable adjustments of individuals</li>
                                                            <li>free from any restrictions that are not legally required</li>
                                                        </ul>
                                                    </div>

                                                    <div className='pt-5'>
                                                        <p className='text-[#999999]'>We are committed to Diversity and Equality and our policy is to ensure that no person involved or associated with the organisation receives less favourable treatment on the grounds of their:</p>
                                                        <ul className=' list-disc pl-5 text-[#999999]'>
                                                            <li>Age</li>
                                                            <li>Being or becoming a transsexual person</li>
                                                            <li>Being married or in a civil partnership</li>
                                                            <li>Being pregnant or on maternity leave</li>
                                                            <li>Disability</li>
                                                            <li>Race including colour, nationality, ethnic or national origin</li>
                                                            <li>Religion, belief or lack of religion/belief</li>
                                                            <li>Sex</li>
                                                            <li>Sexual orientation</li>
                                                            <li>or any other identifiable discriminatory cause</li>
                                                        </ul>
                                                    </div>

                                                    <div className='pt-5'>
                                                        <p className='text-[#999999] py-3'>We will comply fully with the letter and spirit of all laws and directives in relation to diversity and equality. This includes, but is in no way limited to:</p>
                                                        <ul className=' list-disc pl-5 text-[#999999]'>
                                                            <li>The Equality Act 2010 that now encompasses:</li>
                                                            <li>The Equal Pay Act 1970</li>
                                                            <li>The Sex Discrimination Act 1975</li>
                                                            <li>The Race Relations Act 1976</li>
                                                            <li>The Disability Discrimination Act 1995</li>
                                                            <li> The Employment Equality ( Religion or Belief ) Regulations 2003</li>
                                                            <li>The Employment Equality ( Sexual Orientation ) Regulations 2003</li>
                                                            <li>The Employment Equality ( Age ) Regulations 2006</li>
                                                            <li>The Equality Act 2010 Part 2</li>
                                                            <li>The Equality Act ( Sexual Orientation) Regulations 2007</li>
                                                            <li>The Gender Recognition Act 2004</li>
                                                            <li> The Sex Discrimination Act (Amendment) Regulations 2008</li>
                                                        </ul>

                                                        <p className='text-[#999999] py-3'>All Derma Medical staff will be made aware of the equality protocol and will be briefed prior to each stage 2 or 3 assessment. Candidates will also be made aware of this upon delegate recruitment. Directors and supervisors will receive training on issues of equality and diversity upon appointment and employment practices and procedures will be reviewed regularly to ensure fairness to all staff and candidates alike.</p>
                                                    </div>





                                                </>
                                            }

                                            <p className={`pt-5 text-[#999999] text-[15px] font-normal font-sans ${item?.para_3 ? 'block' : 'hidden'}`}>{item?.para_3}</p>
                                            <p className={`pt-5 text-[#999999] text-[15px] font-normal font-sans ${item?.para_4 ? 'block' : 'hidden'}`}>
                                                {item?.para_4}
                                            </p>
                                            <p className={`pt-5 text-[#999999] text-[15px] font-normal font-sans ${item?.para_5 ? 'block' : 'hidden'}`}>
                                                {item?.para_5}
                                            </p>


                                            {
                                                (i === 0 || i === 3 )&&
                                                <>
                                                    <div className='pt-5 text-[#999999] text-[15px] font-normal font-sans'>
                                                        <h2>{`1) Informally –`}</h2>
                                                        <p>{item?.Informaly}</p>
                                                    </div>
                                                    <div className='pt-5 text-[#999999] text-[15px] font-normal font-sans'>
                                                        <h2>{`2) Formally –`}</h2>
                                                        <p>{item?.Formally}</p>
                                                    </div>
                                                </>
                                            }


                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </Layout>
    )
}

export default Policies