import React from "react";
import MuscularSystem from "./MuscularSystem";

const HumanBrain = () => {
    return (
        <div>
            <div id="about">
                <br />
                <br />
                <br />
                <br />
                <div className="border p-5">
                    <MuscularSystem
                        heading={"Human Brain"}
                        title={
                            "The human brain weighs about 1400g which is similar in weight to a cantaloupe. It looks like a large pinkish-grey walnut. It is made up of about 86 billion nerve cells and it is estimated that 20-25% of our total energy budget goes towards running our brain (Herculano-Houzel, 2016). The brain is like a control center- it controls our automatic processes, such as breathing, heart rate, and regulating our body temperature, as well as the more intentional processes including movement, speech, thinking emotions, and our behavior."
                        }
                        imgcont={"https://media.istockphoto.com/vectors/human-brain-vector-illustration-labeled-anatomical-educational-parts-vector-id1218496537?k=20&m=1218496537&s=170667a&w=0&h=XZgkrvKIpPQxuG9PTPan6y0PPyOj7UE1BXO6-R-PqQA="}
                    />
                </div>
            </div>
            {/* ------------------------------------------------ CREBRUM ----------------------------------------------------------- */}
            <div id="cerebrum">
                <br />
                <br />
                <br />
                <br />
                <h1 className="heading mt-5 text-center">Cerebrum</h1>
                <div id="aboutcerebrum">
                    <div class="border p-5">
                        <MuscularSystem
                        imgcont={"https://anatomy-medicine.com/uploads/posts/2015-12/1449919260_the-cerebrum.jpeg"}
                            heading={"About"}
                            title={
                                "The cerebrum (front of brain) comprises gray matter (the cerebral cortex) and white matter at its center. The largest part of the brain, the cerebrum initiates and coordinates movement and regulates temperature. Other areas of the cerebrum enable speech, judgment, thinking and reasoning, problem-solving, emotions, and learning. Other functions are related to vision, hearing, touch, and other senses."
                            }
                        />
                    </div>

                </div>
                <h1 className="heading mt-5 text-center">Parts of Cerebrum:-</h1>
                <MuscularSystem
                imgcont={"https://cdn.flintrehab.com/uploads/2020/09/frontal-lobe-damage.png"}
                    heading={"Frontal Lobe:-"}
                    title={
                        "The frontal lobes are located directly behind the forehead. The frontal lobes are the largest in the human brain and they are also the most common region of injury in traumatic brain injury. The frontal lobes are important for voluntary movement, expressive language, and managing higher-level executive functions. Executive functions refer to a collection of cognitive skills including the capacity to plan, organize, initiate, self-monitor and control one’s responses to achieve a goal. The frontal lobes are considered our behavior and emotional control center and home to our personality."
                    }
                />
                <MuscularSystem
                imgcont={"https://cdn.flintrehab.com/uploads/2020/06/parietal-lobe-stroke.png"}
                    heading={"Parietal Lobe:-"}
                    title={
                        "The parietal lobes are located near the back and top of the head. They are important for processing and interpreting somatosensory input. For example, they inform us about objects in our external environment through touch (i.e., physical contact with skin) and about the position and movement of our body parts (proprioception). The parietal lobes are also responsible for integrating sensory input, and the construction of a spatial coordinate system to represent the world around us."
                    }
                />
                <MuscularSystem
                imgcont={"https://cdn.flintrehab.com/uploads/2020/12/occipital-lobe-damage.png"}
                    heading={"Occipital Lobe:-"}
                    title={
                        "The occipital lobe is the smallest of the four lobes of the cerebral hemisphere, it forms the caudal part of the brain. Relative to the skull, the lobe lies underneath the occipital bone. It rests on the tentorium cerebelli, which separates it from the cerebellum. The occipital lobe is primarily responsible for visual perception, including color, form, and motion."
                    }
                />
                <MuscularSystem
                imgcont={"https://cdn.flintrehab.com/uploads/2021/06/temporal-lobe-damage.png"}
                    heading={"Temporal Lobe:-"}
                    title={
                        "The temporal lobes sit behind the ears and are the second-largest lobe. They are most commonly associated with processing auditory information and with the encoding of memory.The dominant temporal lobe, which is the left side in most people, is involved in understanding language and learning and remembering verbal information. The non-dominant lobe, which is typically the right temporal lobe, is involved in learning and remembering non-verbal information (e.g. visuospatial material and music)."
                    }
                />

            </div>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <div id="diencephalon">
                <br />
                <br />
                <br />
                <br />
                <h1 className="heading mt-5 text-center">Diencephalon</h1>
                <div id="aboutdiencephalon">
                    <div class="border p-5">
                        <MuscularSystem
                        imgcont={"https://o.quizlet.com/e0Drm8IKAjghZWEfirXUbg_b.png"}
                            heading={"About"}
                            title={
                                " The diencephalon is a small part of the brain that is mostly hidden from view when you are looking at the outside of the brain. It is divided into four parts: the epithalamus, thalamus, subthalamus, and hypothalamus. The diencephalon can be found just above the brainstem between the cerebral hemispheres; it forms the walls of the third ventricle. The only part of the diencephalon that can be seen without taking a cross-section of the brain is the bottom-most portion of the hypothalamus."
                            }
                        />
                    </div>

                </div>

            </div>
            <h1 className="heading mt-5 text-center">Parts of Diencephalon:-</h1>
            <MuscularSystem
            imgcont={"https://upload.wikimedia.org/wikipedia/commons/c/cb/Epithalamus.png"}
                heading={"Epithalamus:-"}
                title={
                    "The epithalamus consists primarily of the pineal gland and the habenulae. The pineal gland is an endocrine gland that secretes the hormone melatonin, which is thought to play an important role in the regulation of circadian rhythms. The habenulae (more often referred to with the singular: habenula) are two small areas near the pineal gland. The functions of the habenula are poorly understood, but it is thought to potentially be involved with reward processing and has been implicated in depression. Additionally, there is some evidence that the habenula also produces melatonin, and that it might be involved with sleep regulation."
                }
            />
            <MuscularSystem
            imgcont={"https://i.pinimg.com/474x/1c/e8/97/1ce897e495d73064fec8d34c1f2ef38f.jpg"}
                heading={"Subthalamus:-"}
                title={
                    "A portion of the subthalamus is made up of tissue from the midbrain extending into the diencephalon. Thus, parts of midbrain regions like the substantia nigra and red nucleus are found in the diencephalon. The subthalamus is also home to the subthalamic nucleus and the zona incerta. The subthalamic nucleus is densely interconnected with the basal ganglia and plays a role in modulating movement. The zona incerta has many connections throughout the cortex and spinal cord, but its function is still not determined. Several collections of important fibers (e.g. somatosensory fibers) also pass through the subthalamus."
                }
            />
            <MuscularSystem
            imgcont={"https://cdn.flintrehab.com/uploads/2021/01/thalamus-damage.png"}
                heading={"Thalamus:-"}
                title={
                    "The thalami (more frequently referred to with the singular: thalamus) consist of two oval collections of nuclei that make up most of the mass of the diencephalon. The thalamus is often described as a relay station because almost all sensory information (except smell) that proceeds to the cortex first stops in the thalamus before being sent on to its destination. The structure is subdivided into several nuclei that possess functional specializations for dealing with particular types of information. Sensory information thus travels to the thalamus and is routed to a nucleus tailored to dealing with that type of sensory data."
                }
            />
            <MuscularSystem
            imgcont={"https://cdn.flintrehab.com/uploads/2020/03/hypothalamus-damage.png"}
                heading={"Hypothalamus:-"}
                title={
                    "The hypothalamus is a small (about the size of an almond) region located directly above the brainstem. It also is made up of a collection of nuclei that are involved in a variety of functions. The hypothalamus is often linked, however, to two main roles: maintaining homeostasis and regulating hormone release. Homeostasis is the maintenance of equilibrium in a system like the human body. Optimal biological function is facilitated by keeping things like body temperature, blood pressure, and caloric intake/expenditure at a fairly constant level."
                }
            />
            {/* --------------------------------------------------------------------------------------------------------------------- */}

            <div id="cerebellum">
                <br />
                <br />
                <br />
                <br />
                <h1 className="heading mt-5 text-center">Cerebellum</h1>
                <div id="aboutcerebellum">
                    <div class="border p-5">
                        <MuscularSystem
                        imgcont={"https://d16qt3wv6xm098.cloudfront.net/gGo_PhDPTkyq2UBhncmGIB7bQoK7_Rls/_.jpg"}
                            heading={"About"}
                            title={
                                "The cerebellum (which is Latin for “little brain”) is a major structure of the hindbrain that is located near the brainstem. This part of the brain is responsible for coordinating voluntary movements. It is also responsible for several functions including motor skills such as balance, coordination, and posture. The cerebellum is the largest structure of the hindbrain and can be found in the back portion of the skull below the temporal and occipital lobes and behind the brainstem."
                            }
                        />
                    </div>

                </div>

            </div>
            <h1 className="heading mt-5 text-center">Parts of Cerebellum:-</h1>
            <MuscularSystem
            imgcont={"https://www.researchgate.net/profile/Dante-Salatino/publication/269987178/figure/fig2/AS:613898508058626@1523376218123/CEREBELLAR-CORTEX-CELLULAR-DETAIL-Modified-of-Purves-2004-p-442.png"}
                heading={"Cerebellar cortex:"}
                title={
                    "A layer containing folded tissue containing most of the cerebellum's neurons."
                }
            />
            <MuscularSystem
            imgcont={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sobo_1909_657.png/397px-Sobo_1909_657.png"}
                heading={"Cerebellar nuclei:"}
                title={
                    "The innermost part of the cerebellum containing nerve cells that communication information from the cerebellum."
                }
            />
            <h1 className="heading mt-5 text-white">Functions of Cerebellum</h1>
            <ol type="i" class="text-white">
                <li>Balance and posture</li>
                <li>Mental function</li>
                <li>Movement</li>
                <li>Motor learning</li>
                <li>Vision</li>
            </ol>

            {/* --------------------------------------------------------------------------------------------------------------------- */}


            <div id="neurons">
                <br />
                <br />
                <br />
                <br />
                <h1 className="heading mt-5 text-center">Neurons</h1>
                <div id="aboutcerebellum">
                    <div class="border p-5">
                        <MuscularSystem
                         imgcont={"https://www.verywellmind.com/thmb/rexJN2_iONZegR34mwd2o0VAavw=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/g-neuron-56a792cd5f9b58b7d0ebd043.jpg"}
                            heading={"About"}
                            title={
                                "Neurons are the building blocks of the nervous system. They receive and transmit signals to different parts of the body. This is carried out in both physical and electrical forms. There are several different types of neurons that facilitate the transmission of information. The sensory neurons carry information from the sensory receptor cells present throughout the body to the brain. Whereas, the motor neurons transmit information from the brain to the muscles. The interneurons transmit information between different neurons in the body."
                            }
                        />
                    </div>
                    <h1 className="heading mt-5 text-center">Parts of Neurons:-</h1>
                    <MuscularSystem
                     imgcont={"https://o.quizlet.com/PXyRULJ7TJn9h-ceKeBJ8Q_b.jpg"}
                        heading={"Soma Cell body:"}
                        title={
                            " As its name suggests, soma is at the centre of the neuron, and this is where the neuron’s metabolic activity is carried out.In the soma, new molecules are generated, and all kinds of essential functions are carried out that make possible the vital maintenance of the cell and the functions of the cell,To carry out these functions and achieve the transmission of information between neurons, each of them must produce huge amounts of proteins, without which this transmission would not be possible."
                        }
                    />
                    <MuscularSystem
                     imgcont={"https://ars.els-cdn.com/content/image/3-s2.0-B9780128009000000026-f02-06-9780128009000.jpg"}
                        heading={"Dendrite :"}
                        title={
                            "Another part that makes up neurons is dendrites. This name refers to the numerous extensions in the form of small branches born from the neural body and whose main functions are to receive the stimuli and provide food to the cell.These extensions function as neural terminals, which receive other nearby neurons’ action potentials and redirect them to the cell body or soma. Also, due to its branched shape, along these, we find the dendritic spines, small spines in which the synapses that make possible the transmission of bioelectric impulses occur."
                        }
                    />
                    <MuscularSystem
                     imgcont={"https://biodifferences.com/wp-content/uploads/2020/05/axon_vs_dendrites_content_img.jpg"}
                        heading={"Axon:"}
                        title={
                            "Finally, the axon is the main prolongation of the neuron (and the larger one). It is responsible for transporting the action potential from the cell body to another neuron. This long extension is born from the cell body or, in some cases, from a dendrite. Inside we can find the axoplasm, a characteristically viscous substance in which the different neurons are located."
                        }
                    />
                    <MuscularSystem
                     imgcont={"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/2/%40shutterstock_1017266230.jpg"}
                        heading={"Schwann cells:"}
                        title={
                            "Also known as neurolemocytes, these cells check the axons of peripheral nervous system neurons and form myelin pods."
                        }
                    />
                    <MuscularSystem
                     imgcont={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Neuron_with_oligodendrocyte_and_myelin_sheath.svg/250px-Neuron_with_oligodendrocyte_and_myelin_sheath.svg.png"}
                        heading={"Myelin pods:"}
                        title={
                            "As noted above, some axons have a myelin layer that facilitates the transmission of electrical stimuli over long distances."
                        }
                    />
                    <MuscularSystem
                     imgcont={"https://neuroscientificallychallenged.com/files/images/nodes-of-ranvier.jpg"}
                        heading={"Ranvier nodules:"}
                        title={
                            "This concept refers to the tiny spaces found in the myelin sheath, and its main task is to enhance the speed with which electrical impulses are transmitted."
                        }

                    />
                </div>

            </div>
            {/* ------------------------------------------------------------------------------------------------------------- */}
            <div id="brainstem">
                <br />
                <br />
                <br />
                <br />
                <h1 className="heading mt-5 text-center">Brain Stem</h1>
                <div id="aboutcerebellum">
                    <div class="border p-5">
                        <MuscularSystem
                        imgcont={"https://www.verywellhealth.com/thmb/kv7Y1kYZTBeFOyWrQkH_iEi1bkE=/1937x1548/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1092334754-fd0644493b3148288970e38fd26aead0.jpg"}
                            heading={"About"}
                            title={
                                "Its joining and structurally continuous with the spinal cord. In the brain, the brainstem comprises the midbrain, the pons, and the medulla oblongata. The brain stem performs the motor and sensory innervation to the face and neck through the cranial nerves. Regarding the twelve pairs of cranial nerves, the ten pairs come from the brainstem. This is an extremely valuable part of the brain as the nerve connections..."
                            }
                        />
                    </div>
                    <h1 className="heading mt-5 text-center">Parts of Cerebellum:-</h1>
                    <MuscularSystem
                    imgcont={"https://neuroscientificallychallenged.com/app/cms/assets/thumbnails/midbrain2.jpg"}
                        heading={"Midbrain:"}
                        title={
                            "Midbrain also called the mesencephalon, is composed of the tectum, tegmentum, and ventral tegmentum. The midbrain serves important functions in motor movement, particularly movements of the eye, and in auditory and visual processing. It is positioned within the brainstem and between the forebrain, and the hindbrain. The midbrain is the tiniest of the three areas of the brainstem, averaging around 2cm in length."
                        }
                    />
                    <MuscularSystem
                    imgcont={"https://cdn.flintrehab.com/uploads/2019/07/pons-illustration-pontine-stroke.png"}
                        heading={"Pons:"}
                        title={
                            "The pons is the part of the brainstem and lies inferior to the midbrain, superior to the medulla oblongata, and anterior to the cerebellum. This region of the brainstem comprises neural pathways and tracts that transfer signals from the brain down to the cerebellum and medulla and tracts that transmit the sensory signals up into the thalamus."
                        }
                    />
                    <MuscularSystem
                    imgcont={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brain_bulbar_region.svg/1200px-Brain_bulbar_region.svg.png"}
                        heading={"Medulla:"}
                        title={
                            "The medulla also has known as the medulla oblongata is placed in the brainstem, anterior and somewhat lower to the cerebellum. The medulla is a cone-shaped neuronal mass adapted for autonomic functions ranging from vomiting to sneezing. The medulla oblongata comprises the cardiac, respiratory, vomiting, and vasomotor centers and consequently deals with the autonomic functions of breathing, heart rate, and blood pressure."
                        }
                    />
                </div>

            </div>






            {/* -------------------------------------------------------------------------------------------------------------- */}






            {/* ----------------------------------------------------------------------------------------------------------------------- */}
            <div class="container mt-5">
                <div class="row ">
                    <div class="col">
                        <a href="/learn/learnmore" className="btn px-5">
                            <img src="https://img.icons8.com/ios/30/ffffff/left--v1.png" />
                            Back
                        </a>
                    </div>

                    <div class="col d-flex justify-content-end mr-5">
                        <a href="/learn/skeletalsystem" className="btn px-5">

                            Next
                            <img src="https://img.icons8.com/ios/30/ffffff/right--v1.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default HumanBrain;
