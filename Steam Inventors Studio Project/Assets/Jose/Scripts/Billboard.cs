using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Billboard : MonoBehaviour
{
    public Transform camTransform;
    private Transform m_Transform;
    public bool unalign = true;
   // private Vector3 vect;

    // Start is called before the first frame update
    void Start()
    {
        m_Transform = this.transform;
        camTransform = Camera.main.transform;
    }

    // Update is called once per frame
    void LateUpdate()
    {
        if(unalign)
        {
            m_Transform.forward = camTransform.forward;
        }
        else
        {
            m_Transform.LookAt(camTransform, Vector3.up);
        }
    }
}
