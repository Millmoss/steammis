using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovementAlt : MonoBehaviour
{
    Vector3 m_Movement;
    Rigidbody m_Rigidbody;
    Quaternion m_Rotation = Quaternion.identity;
    public float turnspeed = 20f;
    public float speed = 1;
    //Animator m_Animator;

    // Start is called before the first frame update
    void Start()
    {
        //m_Animator = GetComponent<Animator>();
        m_Rigidbody = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize();
        //print(vertical);
        // Vector3 desiredForward = Vector3.RotateTowards(transform.forward, m_Movement, turnspeed * Time.deltaTime, 0f);
        // m_Rotation = Quaternion.LookRotation(desiredForward);
        OnMove();
        
    }

    void OnMove()
    {
        m_Rigidbody.MovePosition(m_Rigidbody.position + m_Movement * Time.deltaTime * speed);// * m_Animator.deltaPosition.magnitude);
        //m_Rigidbody.MoveRotation(m_Rotation);
    }

}